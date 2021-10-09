import "./App.css";

function App() {
  const test = async () => {
    const headers = {
      "Content-Type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "http://localhost:4000",
    };

    console.log(`test++++`);

    await fetch(`http://localhost:8080/deploydemo/api/v1/test-properties`, {
      method: "POST",
      headers: headers,
      credentials: "include",
      //   body: JSON.stringify({
      //     nid: props.nid,
      //     parent: props.messageId,
      //     message: message,
      //     userName: contextUser ? contextUser : `${userName} +  (гость)`,
      //     root: props.root,
      //     mainRoot: getMainRoot(),
      //     topic: messageTopic,
      //     captchaToken: captchaToken,
      //   }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log("data  " + data);
      })
      .catch((err) => {
        console.log("err " + err);
      });
  };

  //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

  return (
    <div className="App">
      <h1>TEST APP</h1>

      <button onClick={test}> тест </button>
    </div>
  );
}

export default App;
