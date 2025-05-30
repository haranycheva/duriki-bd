import { HttpError } from "../../helpers/index.js";
import { FAQ } from "../../models/FAQ.js";

const deleteFAQ = async(req, res, next) => {
    const {id} = req.params;
    const faq = await FAQ.findByIdAndDelete(id)
    
    if(!faq){
      throw HttpError(400, `Can not find a post with faq ${id}`)
    }
    res.json({faq, message: "delete success"});
}

export default deleteFAQ