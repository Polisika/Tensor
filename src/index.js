import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from "./js/header";
import {DataSet, Model, Student} from "./js/exportLib";

ReactDOM.render(
  <React.StrictMode>
      <Header name="Tensor School" img="img/logo.jpg" description="Добро пожаловать на страницу онлайн школы Тензора! Здесь вы можете ознакомиться с учениками нашей школы." />
      <main className="container" id="main" />
  </React.StrictMode>,
  document.getElementById('root')
);

let dataset = new DataSet({
        object: 'person',
        model: Model,
    }
);

function StudentList(props){
    const listItems = props.map(s => {
            s.type = "Студент";
            return <Student key={s.id} {...s}/>
        }
    );
    return <>{listItems}</>;
}

dataset.read().then( response => {
        const toModel = response.map( data => dataset.toModel(data) );
        ReactDOM.render(StudentList(toModel), document.querySelector("main"));
    }
);
