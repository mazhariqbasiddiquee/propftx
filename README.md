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
















