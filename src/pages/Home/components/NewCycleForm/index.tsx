import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        type="text"
        placeholder="Dê um nome para o seu projeto"
        list="task-suggestion"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestion">
        <option value={'Projeto 1'} />
        <option value={'Projeto 2'} />
        <option value={'Projeto 3'} />
        <option value={'Projeto 4'} />
        <option value={'Projeto 5'} />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        id="minutesAmount"
        type="number"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        maxLength={2}
        disabled={!!activeCycle}
        {...register('minutesAmount', {
          valueAsNumber: true,
        })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
