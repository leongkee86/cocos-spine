import { _decorator, Component, Node, sp } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlaySpineAnimation')
export class PlaySpineAnimation extends Component
{
    @property(sp.Skeleton) skeleton : sp.Skeleton = null;

    public playAnimation( event: Event, animationName : string )
    {
        this.skeleton.setAnimation( 0, animationName, false );
    }

    public playAnimationLoop( event: Event, animationName : string )
    {
        this.skeleton.setAnimation( 0, animationName, true );
    }
}
