import { types } from '@typegoose/typegoose';
import { Container } from 'inversify';

import { Controller } from '../../libs/rest/index.js';
import { Component } from '../../types/index.js';
import { CommentService } from './comment-service.interface.js';
import { CommentController } from './comment.controller.js';
import { CommentEntity, CommentModel } from './comment.entity.js';
import { DefaultCommentService } from './default-comment.service.js';

export function createCommentContainer() {
  const commentContainer = new Container();

  commentContainer.bind<CommentService>(Component.CommentService).to(DefaultCommentService).inSingletonScope();
  commentContainer.bind<types.ModelType<CommentEntity>>(Component.CommentModel).toConstantValue(CommentModel);
  commentContainer.bind<Controller>(Component.CommentController).to(CommentController).inSingletonScope();

  return commentContainer;
}
