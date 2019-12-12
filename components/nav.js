import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <div>
  <nav>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/chart">
      <a>Chart</a>
    </Link>
    <Link href="/chart-rxjs-subject">
      <a>Chart RxJS Subject</a>
    </Link>
    <Link href="/buttons">
      <a>Buttons</a>
    </Link>
    <Link href="/websocket">
      <a>WebSocket</a>
    </Link>
    <Link href="/rxjs-websocket">
      <a>RxJS WebSocket</a>
    </Link>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
        background-color: #2081b8;
        color: white;
        height: 70px;

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
      }
      a {
        color: white;
        text-decoration: none;
        font-size: 20px;
        height: 80px;
        padding: 0 20px;
        
      }
      a:hover {
        background-color: #e56208;
      }
    `}</style>
  </nav>
  </div>
)

export default Nav
