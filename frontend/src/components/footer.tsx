export function Footer() {
  const year = new Date().getFullYear()

  return (
    <div className="bg-amber-200 border-t-2 border-amber-950 py-2 font text-amber-950 font-semibold flex flex-col items-center justify-center">
      <h3>Made with love ♥ by <a href="https://github.com/tjfaccipieri" className="underline" target="_blank" rel="noreferrer"> Thiago Faccipieri </a>- {year}</h3>
    </div>
  )
}