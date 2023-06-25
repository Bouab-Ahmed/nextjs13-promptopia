import "@styles/globals.css";

export const metdata = {
  title: 'Promptoptia',
  description: 'Promptoptia is a prompt generator for writers, artists, and other creative types.',
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
    <body>
      <div className='main'>
        <div className='gradient'></div>
      </div>

      <main className='app'>
        {children}
      </main>
    </body>
    </html>
  )
}

export default RootLayout