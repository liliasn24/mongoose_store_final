const React = require('react');

class DefaultLayout extends React.Component {
  render(){
    return(
      <html lang='en' dir='ltr'>
      <head>
        <meta charSet='utf-8' />
        {this.props.styles && this.props.styles.map((style) => {
          return (
            <link key={style.key} rel='stylesheet' href={style.href} />
          )
        })}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>

        <title>{this.props.title}</title>

      </head>
      <body>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </body>
      </html>
    )
  }
}

module.exports = DefaultLayout;
