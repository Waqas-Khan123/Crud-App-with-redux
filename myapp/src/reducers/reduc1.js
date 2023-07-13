
const initialstate=0;

const Update=(state=initialstate,action)=>{
    console.log(action);
    if (action.type === "update") {
      return (state = action.payload);
    } else {
      return state;
    }



}
export { Update };