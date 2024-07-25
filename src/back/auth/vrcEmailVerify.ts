import axios from "axios";
axios.defaults.headers.common["User-Agent"] = "vrc-matching/0.0.1 akatuki-sora@akatuki-host.com";
export default async function (UserID: string, email: string) {
  let getRes,getResIgnore
  try{
    let uri = `https://vrchat.com/api/1/auth/exists?email=${email}`;
    getRes = await axios.get(uri);
    uri += `&excludeUserId=${UserID}`;
    getResIgnore = await axios.get(uri);
    if(!(getRes.status == 200 && getResIgnore.status == 200))return false;
    if(getRes.data.userExists == !getResIgnore.data.userExists){
      return true;
    }
    return false
  } catch {
    return false;
  }
}
