/* eslint-disable prettier/prettier */

import { zodResolver } from '@hookform/resolvers/zod'
import { HandPalm, Play } from 'phosphor-react'
import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { CyclesContext } from '../../contexts/CyclesContext'
import { CountDown } from './components/CountDown'
import { NewCycleForm } from './components/NewCycleForm'
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton
} from './styles'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const {
    activeCycle,
    createNewCycle,
    interruptCurrentCycle
  } = useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      minutesAmount: 0,
      task: '',
    },
  })

  const { handleSubmit, reset, watch } = newCycleForm
  const task = watch('task')
  const isSubmitDisabled = !task

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle({
      minutesAmount: data.minutesAmount,
      task: data.task
    })
    reset()
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <CountDown />
        {
          activeCycle
            ?
            (
              <StopCountdownButton type="button" onClick={interruptCurrentCycle} >
                <HandPalm size={24} />
                Interromper
              </StopCountdownButton>
            )
            :
            (
              <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
                <Play size={24} />
                Começar
              </StartCountdownButton>
            )
        }
      </form>
    </HomeContainer >
  )
}
