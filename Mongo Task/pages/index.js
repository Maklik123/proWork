import React from "react";
import TeacherTable from "../component/teachertable";
import Head from "../component/Head";

export default class extends React.Component{
  render(){
    return(
      <div>
        <Head></Head>
        <div className='container'>
            <h2>Teacher</h2>
            <div>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                  </tr>
                  <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                    <td>mary@example.com</td>
                  </tr>
                  <tr>
                    <td>July</td>
                    <td>Dooley</td>
                    <td>july@example.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
      </div>
    )
  }
}
