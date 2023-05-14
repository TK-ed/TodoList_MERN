import React from "react";
import "../todoform/todoform.css";
import img from "../../assets/img.jpg";

export default function Todoform() {
  return (
    <div>
      <div class="container">
        <header>
          <h2>
            <a href="https://github.com/TK-ed">
              <i class="ion-plane"></i> TK-ed
            </a>
          </h2>
        </header>

        <div
          class="cover"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
          }}
        >
          <h1>Full-Stack Todo List</h1>
          <form class="flex-form">
            <input className="box" type="text" placeholder="Add Todo.." />
            <input className="btn" type="submit" value="Otha" />
          </form>
        </div>
      </div>
    </div>
  );
}
