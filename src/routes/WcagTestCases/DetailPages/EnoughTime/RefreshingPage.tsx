import { Helmet } from "react-helmet";

export const RefreshingPage = () => {
  return (
    <>
      <Helmet>
        <title>Refreshing Page</title>
      </Helmet>
      <head>
        <meta http-equiv="refresh" content="20" />
      </head>
      <main>
        <h1>Refreshing Page</h1>
        <p>
          If your browser supports 'refresh', this page refreshes every 20
          seconds.
        </p>
      </main>
    </>
  );
};
