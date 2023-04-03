import templateName from '../models/templateName';
import ObjectManipulator from '../lib/helpers/ObjectDestructurer';
import { ObjectId } from 'mongoose';

class templateNameService {
    async index(req) {
        const perPage = parseInt(req.query.per_page) || 10;
        const page = parseInt(req.query.page) || 1;

        const total = await templateName.countDocuments({});
        const records = await templateName.find({})
            .skip((page - 1) * perPage)
            .limit(perPage);

        return {
            data: records,
            current_page: page,
            per_page: perPage,
            total: total,
            last_page: Math.ceil(total / perPage)
        }
    }

    async show(req) {
        const { id } = req.params;
        const record = await templateName.findById(id);
        if (!record) {
            return false;
        }
        return {
            data: record
        };
    }

    async update(req) {
        const { id } = req.params;
        const data = req.body;
        const result = await templateName.updateOne({ _id: ObjectId(id) }, data);
        if (result.nModified === 0) {
            return false;
        }
        return {
            result
        };
    }

    async destroy(req) {
        const { id } = req.params;
        const result = await templateName.deleteOne({ _id: ObjectId(id) });
        if (result.deletedCount === 0) {
            throw new Error(`Failed to delete templateName record with id ${id}`);
            return false;
        }
        return true;
    }
}

export default new templateNameService();
