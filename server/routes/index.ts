import { NextFunction, Request, Response, Router } from 'express';
import { BaseRoute } from './route';

export class IndexRoute extends BaseRoute {

  public static create(router: Router) {
    router.get('/', (req: Request, res: Response, next: NextFunction) => {
      new IndexRoute().index(req, res, next);
    });
  }

  constructor() {
    super();
  }

  public index(req: Request, res: Response, next: NextFunction) {

    this.title = 'Главная';
    const options: Object = {
      'message': 'Тест msg'
    };
    this.render(req, res, 'index', options);
  }
}
