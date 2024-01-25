# propftx

#Backend
#hotsed on render : https://propftx-tykn.onrender.com
# Schema for movies :


{
    name:{type:String},
    img:{type:String},
    rating:{type:String}

}


# routes of movies

get:https://propftx-tykn.onrender.com/movie
post:https://propftx-tykn.onrender.com/movie/add
patch:https://propftx-tykn.onrender.com/movie/update/_id
delete:https://propftx-tykn.onrender.com/movie/delete/_id


# Schema for user

{
   
    email:{type:String},
    password:{type:String},
    FirstName:{type:String}

}

#routes for user 
get:https://propftx-tykn.onrender.com/user
post:https://propftx-tykn.onrender.com/user/signup
post:https://propftx-tykn.onrender.com/user/login


#Schma for watch list 

{
    name:{type:String},
    img:{type:String},
    rating:{type:String},
    email:{type:String}

}



# routes for watchlist
get:https://propftx-tykn.onrender.com/watch
post:https://propftx-tykn.onrender.com/watch/add
patch:https://propftx-tykn.onrender.com/watch/update/_id
delete:https://propftx-tykn.onrender.com/watch/delete/_id




# front End
Hosted on vercel  :  https://propftx-mazhariqbasiddiquee.vercel.app/

![Screenshot (45)](https://github.com/mazhariqbasiddiquee/propftx/assets/121328575/e145565e-9e36-4b06-8939-403ec0c28e3b)

This is the homepage from where you can add movies to watch list and delete and update movies , if you are login otherwise , you have to login first.From home page you can edit after clicking on text it will show you prompt to enter values for name change and for rating change
![Screenshot (51)](https://github.com/mazhariqbasiddiquee/propftx/assets/121328575/a5db3a26-c853-4959-b828-7c06282086a6)



![Screenshot (52)](https://github.com/mazhariqbasiddiquee/propftx/assets/121328575/fd6d6889-89e7-45d7-ba9c-81a47c63ae98)



#Login page

it will work only if you enter correct userid and password otherwise it will show proper message like user not found

![Screenshot (46)](https://github.com/mazhariqbasiddiquee/propftx/assets/121328575/0c65317f-f984-46f4-8b9e-df1f089074a5)

![Screenshot (48)](https://github.com/mazhariqbasiddiquee/propftx/assets/121328575/2dd56bcc-2869-4dce-97f6-47db2aabd408)


![Screenshot (49)](https://github.com/mazhariqbasiddiquee/propftx/assets/121328575/799f1d5a-7bb3-4771-bbd1-cc10829ceb74)



#WatchList Page 
From home page  you can add movies to watchlist and can view in the watch list , if you are login

![Screenshot (53)](https://github.com/mazhariqbasiddiquee/propftx/assets/121328575/d50a3755-51ff-4140-8335-9b81f7dff582)



#Add movies Page
In this page, you can add movies after entering name , img link and rating of the movies ,which will be added in the list of movies

![Screenshot (54)](https://github.com/mazhariqbasiddiquee/propftx/assets/121328575/84c0612c-7ecd-43e8-8ae1-f08d0254a070)
















