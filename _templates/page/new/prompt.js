// eslint-disable-next-line @typescript-eslint/no-var-requires
const changeCase = require("change-case")

module.exports = {
  prompt: ({ prompter }) => {
    return prompter
      .prompt({
        type: "input",
        name: "route",
        message: "Page route:",
      })
      .then(({ route: routeRaw }) => {
        const name = changeCase.pascalCase(routeRaw, true)
        const route = changeCase.hyphenCase(routeRaw, true)

        return prompter
          .prompt({
            default: "N",
            message: `Did you want to generate <${name} /> with example code?`,
            name: "withExample",
            type: "toggle",
          })
          .then(({ withExample }) => {
            if (withExample) {
              return prompter
                .prompt({
                  default: "N",
                  message: `Did you want to include getServerSideProps in the example <${name} />?`,
                  name: "getServerSideProps",
                  type: "toggle",
                })
                .then(({ getServerSideProps }) => {
                  if (!getServerSideProps) {
                    return prompter
                      .prompt({
                        default: "N",
                        message: `Did you want to include getStaticProps in the example <${name} />?`,
                        name: "getStaticProps",
                        type: "toggle",
                      })
                      .then(({ getStaticProps }) => ({
                        route,
                        name,
                        withExample,
                        getServerSideProps: false,
                        getStaticProps,
                      }))
                  }

                  return {
                    route,
                    name,
                    withExample,
                    getServerSideProps,
                    getStaticProps: false,
                  }
                })
            }

            return {
              route,
              name,
              withExample,
              getServerSideProps: false,
              getStaticProps: false,
            }
          })
      })
  },
}
