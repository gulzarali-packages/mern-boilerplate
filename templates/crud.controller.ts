import templateNameService from '../services/templateNameService';

import { templateNameShowRequest } from '../requests/templateName/templateNameShowRequest';
import { templateNameCreateRequest } from '../requests/templateName/templateNameCreateRequest';
import { templateNameUpdateRequest } from '../requests/templateName/templateNameUpdateRequest';
import { templateNameDestroyRequest } from '../requests/templateName/templateNameDestroyRequest';

import templateNameIndexResource from '../resources/templateName/templateNameIndexResource';
import templateNameShowResource from '../resources/templateName/templateNameShowResource';
import templateNameCreateResource from '../resources/templateName/templateNameCreateResource';
import templateNameUpdateResource from '../resources/templateName/templateNameUpdateResource';
import templateNameDestroyResource from '../resources/templateName/templateNameDestroyResource';

import { handleRequestValidation } from '../lib/helpers/requestHelper';


class templateNameController {
    async index(req, res) {
        try {
            const result = await templateNameService.index(req.body);
            return res.status(200).json(new templateNameIndexResource(result.toObject()));
        } catch (error) {
            return res.status(500).json(new Error(error));
        }
    }
    async show(req, res) {
        return handleRequestValidation(req, res, templateNameService.show, templateNameShowResource, templateNameShowRequest);
    }

    async create(req, res) {
        return handleRequestValidation(req, res, templateNameService.create, templateNameCreateResource, templateNameCreateRequest);
    }

    async update(req, res) {
        return handleRequestValidation(req, res, templateNameService.update, templateNameUpdateResource, templateNameUpdateRequest);
    }

    async destroy(req, res) {
        return handleRequestValidation(req, res, templateNameService.destroy, templateNameDestroyResource, templateNameDestroyRequest);
    }
}

export default new templateNameController();