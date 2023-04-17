function countSmileys(arr) {
    count=0;//count if there is smiling face
    if(arr.length===0)//return 0 if arr is empty
    return 0
    for(i=0;i<arr.length;i++){
        if(arr[i].length===2){
            if(arr[i][0]===':'||arr[i][0]===';'){//check if is valid eyes
        for(j=0;j<arr[i].length;j++){
         if(arr[i][j]==='D' || arr[i][j]===')')//check if there is smile face
            count+=1;
        }
        }
    }//bottom of loop
     if(arr[i].length===3){
        if((arr[i][0]===':'||arr[i][0]===';')&&(arr[i][1]==='-'||arr[i][1]==='~')){//check if is valid eyes and nose
        for(j=0;j<arr[i].length;j++){
        if(arr[i][j]==='D' || arr[i][j]===')')//check if there is smile face
        count+=1;
        }
    }
}

    }
    return count;

    }