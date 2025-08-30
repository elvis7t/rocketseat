import { Entity } from './entity'

export abstract class AggregateRoot<Props> extends Entity<Props> {
  // private _id: string
  // private _props: Props

  // constructor(id: string, props: Props) {
  //   this._id = id
  //   this._props = props
  // }

  // get id(): string {
  //   return this._id
  // }

  // get props(): Props {
  //   return this._props
  // }
}
