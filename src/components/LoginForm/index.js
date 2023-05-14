function LoginForm ({onChange, handleLogin}) {
    return(
        <div>
            <form>
                <input name='email' onInput={onChange}/>
                <input name='password' type ="password" onInput={onChange}/>
                <input name='remember' type ="checkbox" onInput={onChange}/>
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
}

export default LoginForm