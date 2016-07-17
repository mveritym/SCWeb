import React from 'react';
import rill from 'rill';
import renderer from '@rill/react';

const app = rill();

app.use(renderer());

app.use(({ locals }, next) => {
  locals.title = "@rill/react";
  return next();
});

app.get("/", ({ locals, res }) => {
  res.body = <HelloWorld message="Hello World"/>;
});

function HelloWorld (props, { locals }) {
  return (
    <html>
      <head>
        <title>My App</title>
        <meta name="description" content="Rill Application"/>
      </head>
      <body>
        { locals.title }
        { props.message }
        <div>{props.children}</div>
        <script src="/app.js"/>
      </body>
    </html>
  );
}

app.listen({port: 3000}, () => {
  console.log("StrongCurves Web listening at http://localhost:3000");
});
