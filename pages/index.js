import React from 'react'

const Home = () => (
  <div>
Home
  <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3">
      <nav className="my-2 my-md-0 mr-md-3">
        <Link href="/be">
          <a className="p-2 text-dark">be</a>
        </Link>
        <Link href="/ua">
          <a className="p-2 text-dark">ua</a>
        </Link>
        <Link href="/de">
          <a className="p-2 text-dark">de</a>
        </Link>
        <Link href="/br">
          <a className="p-2 text-dark">br</a>
        </Link>
      </nav>
    </div>
  </div>
)

export default Home
