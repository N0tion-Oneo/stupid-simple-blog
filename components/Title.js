function Title() {
  return (
    <div className='center'>
      <a href='/'>
        <h1 className='title'>A Stupid Simple Blog</h1>
      </a>
      <h2>
        A stupid simple free Next.js photo blog with a Netlify form database,
        infinite scroll, metatags and more.
      </h2>
      <style jsx>
        {`
          a {
            color: inherit;
            text-decoration: none;
          }
          a:hover {
            text-decoration: none;
          }
          .center {
            text-align: center;
          }
        `}
      </style>
    </div>
  )
}
export default Title
