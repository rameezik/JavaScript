let text =
  "world war II changed history in many countries, and many nations were involved during world war II. People remember world war II for its global impact, as technology advanced rapidly because of world war II. Families were deeply affected by world war II, and lessons were learned from the events of world war II. Books and films often focus on world war II, and today, students still study world war II in school.";
  let textreplacement= "The Second World War"

  for(i=0; i<text.length; i++){
    textslice = text.slice(i, i + 12);
    if(textslice === "world war II"){
        text= text.slice(0, i) + textreplacement + text.slice(i + 12);
        
    }
    console.log(text)

  }
  
