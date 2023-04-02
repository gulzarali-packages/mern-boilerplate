

class ProductController {
    async index(req, res){
        try {
            return res.status(200).json('response submitted');
        } catch (error) {
            return res.status(500).json(new Error(error));
        }
    }
}

export default new ProductController();