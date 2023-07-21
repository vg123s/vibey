import { validationSchema } from '../validator-schema/validationSchema';
import { HackathonService } from './hackathon.service';
import * as express from 'express';
import { Request, Response } from 'express';
import { checkSchema, validationResult } from 'express-validator';

export const hackathonRouter = express.Router();

interface RequestParams {
  id: string;
  slug: string;
}

//get all hackathon

hackathonRouter.get('/', async (_, res: Response) => {
  try {
    const hackathon = await HackathonService.getAllHackathons();
    res.status(200).send({ success: true, hackathon: hackathon });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

//get hackathon by id

hackathonRouter.get(
  '/id/:id',
  checkSchema(validationSchema.idSchema),
  async (req: Request<RequestParams>, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const { id } = req.params;

      const hackathon = await HackathonService.getHackathonsById(id);
      res.status(200).send({ success: true, hackathon: hackathon });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  }
);

//get hackathon by slug

hackathonRouter.get(
  '/slug/:slug',
  checkSchema(validationSchema.slugSchema),
  async (req: Request<RequestParams>, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const { slug } = req.params;

      const hackathon = await HackathonService.getHackathonsBySlug(slug);
      res.status(200).send({ success: true, hackathon: hackathon });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  }
);

//create hackathon
hackathonRouter.post(
  '/create',
  checkSchema(validationSchema.createSchema),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const data = req.body;
      const hackathon = await HackathonService.createHackathon(data);
      res.status(200).send({ success: true, hackathon: hackathon });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  }
);

//update hackathon
hackathonRouter.post(
  '/update/:id',
  checkSchema(validationSchema.createSchema),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const { id } = req.params;
      const data = req.body;

      const hackathon = await HackathonService.updateHackathon(id, data);
      res.status(200).send({ success: true, hackathon: hackathon });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  }
);

//delete hackathon by id

hackathonRouter.post(
  '/delete',
  checkSchema(validationSchema.deleteSchema),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const { id } = req.body;
      const hackathon = await HackathonService.deleteHackathon(id);
      res.status(200).send({ success: true, hackathon: hackathon });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  }
);