import Image from "next/image"

export function Welcome() {
  return (
    <>
      <div className="Welcome">
        <header className="Welcome-header">
          <h1 className="Welcome-h1">Welcome</h1>
          <div className="Welcome-logo">
            <Image src="/logo.svg" alt="logo" height={300} width={300} />
          </div>

          <p>
            Edit <code>src/components/Welcome/Welcome.tsx</code> and save to
            reload.
          </p>
          <a
            className="Welcome-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn about React
          </a>
          <a
            className="Welcome-link"
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn about Next.js
          </a>
        </header>
      </div>
      <style jsx>{`
        .Welcome {
          text-align: center;
        }

        @media (prefers-reduced-motion: no-preference) {
          .Welcome-logo {
            animation: Welcome-logo-spin infinite 20s linear;
          }
        }

        .Welcome-header {
          background-color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: calc(10px + 2vmin);
          color: #464855;
        }

        .Welcome-link {
          color: #ff4858;
        }

        .Welcome-input {
          height: 32px;
          margin-top: 8px;
        }

        @keyframes Welcome-logo-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  )
}
