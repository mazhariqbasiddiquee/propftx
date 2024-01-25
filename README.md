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

![Screenshot (45)](https://github.com/mazhariqbasiddiquee/propftx/assets/121328575/e145565e-9e36-4b06-8939-403ec0c28e3b)

This is the homepage from where you can add movies to watch list and delete and update movies , if you are login otherwise , you have to login first



#Login page

it will work only if you enter correct userid and password otherwise it will show proper message like user not found

![Screenshot (46)](https://github.com/mazhariqbasiddiquee/propftx/assets/121328575/0c65317f-f984-46f4-8b9e-df1f089074a5)

![Screenshot (48)](https://github.com/mazhariqbasiddiquee/propftx/assets/121328575/2dd56bcc-2869-4dce-97f6-47db2aabd408)
![Screenshot (49)](https://github.com/mazhariqbasiddiquee/propftx/assets/121328575/799f1d5a-7bb3-4771-bbd1-cc10829ceb74)
















