
type Props = {

    text: string,
    click : () => void,
}
function Button({text, click}: Props) {
  return (
    <button
    onClick={click}
     className="py-2 lg:max-w-md px-6 bg-transparent border-2 rounded-md border-zinc-700 font-mono  font-semibold text-zinc-700 transition duration-500 ease-in-out hover:bg-purple-400/10 hover:text-white hover:border-purple-200/20">{text}</button>
  )
}
export default Button