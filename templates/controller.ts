

class templateNameController {
    async index(req, res){
        try {
            return res.status(200).json('response submitted');
        } catch (error) {
            return res.status(500).json(new Error(error));
        }
    }
    async show(req, res){
        try {
            return res.status(200).json('response submitted');
        } catch (error) {
            return res.status(500).json(new Error(error));
        }
    }
    async update(req, res){
        try {
            return res.status(200).json('response submitted');
        } catch (error) {
            return res.status(500).json(new Error(error));
        }
    }
    async destroy(req, res){
        try {
            return res.status(200).json('response submitted');
        } catch (error) {
            return res.status(500).json(new Error(error));
        }
    }
}

export default new templateNameController();