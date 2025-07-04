import useAppContext from "@/hooks/useAppContext"
import useChatRoom from "@/hooks/useChatRoom"
import useSocket from "@/hooks/useSocket"
import ACTIONS from "@/utils/actions"
import { formatDate } from "@/utils/formateDate"
import { useRef } from "react"
import { LuSendHorizonal } from "react-icons/lu"

function ChatInput() {
    const { currentUser } = useAppContext()
    const { socket } = useSocket()
    const { setMessages } = useChatRoom()
    const inputRef = useRef(null)

    const handleSendMessage = (e) => {
        e.preventDefault()

        const inputVal = inputRef.current.value.trim()

        if (inputVal.length > 0) {
            const message = {
                message: inputVal,
                username: currentUser.username,
                timestamp: formatDate(new Date()),
            }
            socket.emit(ACTIONS.SEND_MESSAGE, { message })
            setMessages((messages) => [...messages, message])
            inputRef.current.value = ""
        }
    }

    return (
        <form
            onSubmit={handleSendMessage}
            className="flex justify-between rounded-md border border-cyan-400 bg-dark "
        >
            <input
                type="text"
                className="w-full flex-grow rounded-md border-none bg-dark p-2 outline-none"
                placeholder="Enter a message..."
                ref={inputRef}
            />
            <button
                className="flex items-center justify-center rounded-r-md  bg-gradient-to-r from-blue-700 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 






 p-2 text-black"
                type="submit"
            >
                <LuSendHorizonal size={24} />
            </button>
        </form>
    )
}

export default ChatInput
