import { AggregateRoot } from "@/core/entities/aggregate-root"
import { DomainEvent } from "./domain-event"
import { UniqueEntityId } from "../entities/unique-entity-id"
import { DomainEvents } from "./domain-events"

class CustomAggregateCreated implements DomainEvent {

    public ocurredAt: Date
    public aggregate: CustomAggregate

    constructor(aggregate: CustomAggregate) {
        this.aggregate = aggregate
        this.ocurredAt = new Date()
    }

    public getAggregateId(): UniqueEntityId {
        return this.aggregate.id
    }
}

class CustomAggregate extends AggregateRoot<null> {
    static create() {
        const aggregate = new CustomAggregate(null)
        aggregate.addDomainEvent(new CustomAggregateCreated(aggregate))
        return aggregate
    }
    static eventName = 'CustomAggregate'
}

describe('Domain Events', () => {
    it('should be able to register and dispatch an event', () => {
        const callbackSpy = vi.fn()
        
        //Subscribe cadastrado (ouvindo o evento de "resposta criada")
        DomainEvents.register(callbackSpy, CustomAggregateCreated.name)

        //Estou criando uma resposta porem sem salvar no banco de dados
        const aggregate = CustomAggregate.create()

        //Essa assegurando que o evento foi criado porem Não foi disparado
        expect(aggregate.domainEvents).toHaveLength(1)

        //Estou salvando a resposta no banco de dados e assim disparando o evento
        DomainEvents.dispatchEventsForAggregate(aggregate.id)

        // O subscribe ouve o evento e faz  o que precisa ser feito com o dado
        expect(callbackSpy).toHaveBeenCalled()
        expect(aggregate.domainEvents).toHaveLength(0)
    })
})

