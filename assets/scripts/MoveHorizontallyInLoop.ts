import { _decorator, CCFloat, Component, Node, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MoveHorizontallyInLoop')
export class MoveHorizontallyInLoop extends Component
{
    @property(CCFloat) leftPositionX : number = -100;
    @property(CCFloat) rightPositionX : number = 100;
    @property(CCFloat) moveDuration : number = 1.5;

    start()
    {
        const _posY = this.node.position.y;

        const _moveLeft = tween()
            .call(() => {
                this.node.setScale( 1, 1, 1 );
            })
            .to( this.moveDuration, { position: new Vec3( this.leftPositionX, _posY, 0 ) } );

        const _moveRight = tween()
            .call(() => {
                this.node.setScale( -1, 1, 1 );
            })
            .to( this.moveDuration, { position: new Vec3( this.rightPositionX, _posY, 0 ) } );

        tween(this.node)
            .repeatForever(
                tween().then( _moveLeft ).then( _moveRight )
            )
            .start();
    }
}
