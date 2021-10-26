function ReviewForm(){


  const options = []
  for(let i in 5){
    options.push(<option value={i}>{i}</option>)
  }

  return(
    <div>
      <select>
        {options}
      </select>
    </div>
  )

}


export default ReviewForm
