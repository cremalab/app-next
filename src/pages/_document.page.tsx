import { nanoid } from "nanoid"
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document"
import flush from "styled-jsx/server"

// CSP implementation based on https://github.com/vercel/next.js/blob/canary/examples/styled-jsx-with-csp/pages/_document.jsx
class CustomDocument extends Document<{ nonce: string }> {
  static async getInitialProps(ctx: DocumentContext) {
    const nonce = nanoid()

    // https://github.com/vercel/next.js/blob/canary/packages/next/pages/_document.tsx#L89
    const { html, head } = await ctx.renderPage()

    // Adds `nonce` to style tags on Server Side Rendering
    const styles = [...flush({ nonce })]

    let contentSecurityPolicy = ""
    if (process.env.NODE_ENV === "production") {
      contentSecurityPolicy = `default-src 'self'; style-src 'self' 'nonce-${nonce}'; img-src 'self' data:; object-src 'none';`
    } else {
      // react-refresh needs 'unsafe-eval'
      // Next.js needs 'unsafe-inline' during development https://github.com/vercel/next.js/blob/canary/packages/next/client/dev/fouc.js
      // Specifying 'nonce' makes a modern browsers ignore 'unsafe-inline'
      contentSecurityPolicy = `default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-eval'; img-src 'self' data:; object-src 'none';`
    }

    ctx?.res?.setHeader("Content-Security-Policy", contentSecurityPolicy)

    return { styles, html, head, nonce }
  }

  render() {
    return (
      <Html>
        <Head nonce={this.props.nonce}>
          {/* Styled-JSX will add this `nonce` to style tags on Client Side Rendering */}
          {/* https://github.com/vercel/styled-jsx/blob/master/src/lib/stylesheet.js#L31 */}
          {/* https://github.com/vercel/styled-jsx/blob/master/src/lib/stylesheet.js#L240 */}
          <meta property="csp-nonce" content={this.props.nonce} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
