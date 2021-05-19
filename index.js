const express= require('express')
const app=express();
const fs = require('fs');
var result="";
fs.readdir('C:\\Users\\USER\\OneDrive\\Desktop',"utf-8",(err,folders)=>
{
app.get("/",(req,res)=>
{
    if(err)
    {
      throw err
    }

    else
    {
   for(var i=0;i<folders.length;i++)
   {
       var path = 'C:\\Users\\USER\\OneDrive\\Desktop'+folders[i];
       var temp=fs.statSync(path);
       if(temp.isFile())
       {
        result +="<img src='https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Docs-icon.png' height='25px' width='30px'>"+ folders[i] +"<br>";

       }
       else if(temp.isDirectory())
       {result+= "<img src='https://upload.wikimedia.org/wikipedia/commons/5/59/OneDrive_Folder_Icon.svg' height='30px' width='28px'>"+ folders[i] + "<br>";
    }
       res.send(result);
   }
    }
})
}
)

app.listen(4081)
