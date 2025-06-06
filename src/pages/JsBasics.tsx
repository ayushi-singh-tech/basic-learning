import { IonContent, IonPage } from '@ionic/react';
import React from 'react'

const JsBasics:React.FC = () => {
    const user ={
        name:"amit",
        age:24,
    };

    //console.log("user",user);

    const users = [
        {name:"amit", age:24},
         {name:"sumit", age:26},
    ];

    //console.log("users", users);

/**============== for in============= */

    for (const data in user){
        console.log("for-in data:", data);
    }

/**============== for of============= */

     for (const data of users){
        console.log("for-in data:", data);
    }

    /**============== for each============= */
    users.forEach((user) =>{
        console.log("forEach data :", user);

        if(user.name ==="sumit"){
            user.name = "aniket";
        }
        console.log("new user", user);
    });

    /**=============.map============== */

    const newUsers = users.map((user)=>{
        return user;
    });

    console.log("map method:", newUsers);

    const updatedUsers = users.map((user)=>{
        if(user.age=== 26){
            return {...user,name: "Akash"};
        }
        return user;
    });
    console.log("updatedUsers", updatedUsers);
 

  return (
    <IonPage>
        <IonContent>
            <div>name : {user.name}</div>
              <div>age : {user.age}</div>

              {
                users.map((user,index)=>{
                    return(
                        <div key={index}>
                            <div>name {user.name}</div>
                            <div> age {user.age}</div>
                        </div>
                    )
                })
              }

        </IonContent>
    </IonPage>
      )
}

export default JsBasics
