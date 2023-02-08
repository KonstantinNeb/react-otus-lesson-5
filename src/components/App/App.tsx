import { useState } from "react"
import { GamePanel } from "../PlayGround/GamePanel"
import { LoginForm } from "../LoginForm/LoginForm"

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <div>
      {isLogin ? <GamePanel /> : <LoginForm onSubmit={() => setIsLogin(true)} />}
    </div>
  )
}
