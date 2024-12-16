 function MyButton() {
    return (
        <button>
            Я кнопка
        </button>
    );
}

 export default function MyApp() {
    return (
        <div>
            <h1 className="pb-3">Ласкаво просимо до мого додатку</h1>
            <MyButton />
        </div>
    );
}
