import Component from '@glimmer/component';
import move from 'ember-animated/motions/move';
import TransitionContext from 'ember-animated/-private/transition-context';
import { easeOut, easeIn } from 'ember-animated/easings/cosine';

interface Args {
  isVisible: boolean
  onClose: Function
}

export default class UiModalComponent extends Component<Args> {
  // Functions
  *slideFromBottom({
      insertedSprites,
      removedSprites
    }: TransitionContext
  ) {
    for (let sprite of removedSprites) {
      sprite.endAtPixel({ y: window.innerHeight });
      move(sprite, { easing: easeIn });
    }

    for (let sprite of insertedSprites) {
      sprite.startAtPixel({ y: window.innerHeight });
      move(sprite, { easing: easeOut });
    }
  }
}
