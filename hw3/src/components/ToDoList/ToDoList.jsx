import React, { useState, useEffect } from 'react';
import './style.css';
import { ToDoItem } from '../ToDoItem/TodoItem';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { ToDoSettings } from '../ToDoSettings/ToDoSettings';

export const ToDoList = () => {
  const [value, setValue] = useState('')
  const [isValueValid, setIsValueValid] = useState(true)
  const [setingsToggle, setSetingsToggle] = useState(false)
  const [tasks, setTasks] = useState([])
  const [textColor, setTextColor] = useState('')
  const [bGColor, setBGColor] = useState('')
  const [settings, setSettings] = useState({
    textColorR: '0',
    textColorG: '0',
    textColorB: '0',
    textColorO: '1',
    bGColorR: '199',
    bGColorG: '188',
    bGColorB: '147',
    bGColorO: '1',
  })

  useEffect(() => {
    const textColor = `rgba(${settings.textColorR}, ${settings.textColorG}, 
      ${settings.textColorB}, ${settings.textColorO})`
    const bGColor = `rgba(${settings.bGColorR}, ${settings.bGColorG}, 
      ${settings.bGColorB}, ${settings.bGColorO})`

    setTextColor(textColor)
    setBGColor(bGColor)
  }, [settings])

  const onSetSettings = (target) => {
    setSettings({
      ...settings,
      [target.id]: target.value
    })
  }

  const handleChange = ({ target: { value } }) => {
    setValue(value)
  }

  const onDeleteItem = (id) => {
    setTasks((prevTasks) => {
      const newTasks = prevTasks.filter(task => task.id !== id)
      const newTasksWithUpdatedId = newTasks.map((task, idx) => {
        return {
          ...task,
          id: idx + 1
        }
      })

      return newTasksWithUpdatedId
    })
  }

  const validation = (value) => {
    const isNotUnique = tasks.some(task => task.text === value)

    if (value.length === 0 || isNotUnique) {
      setIsValueValid(false)
      return false
    } else {
      setIsValueValid(true)
      return true
    }
  }

  const onAddItem = () => {
    if (!validation(value)) return

    const item = {
      id: tasks.length + 1,
      text: value,
      bGColor,
      textColor,
    }

    setTasks([...tasks, item])
    setValue('')
  }

  const onKeyPress = (e) => {
    if (e.code === 'Enter') {
      onAddItem()
    }
  }

  const onSettingsPushed = () => {
    setSetingsToggle(!setingsToggle)
  }

  const spawnTasks = () => {
    return tasks.map((task, idx) => {
      return (
        <ToDoItem
          onDeleteItem={onDeleteItem} key={idx} id={task.id}
          text={task.text} backColor={task.bGColor}
          textColor={task.textColor}
        />
      )
    })
  }

  return (
    <div className='todo-wrap'>
      <span>Insert your task</span>
      <div className='todo-header'>
        <Input
          value={value}
          handleChange={handleChange}
          onKeyPress={onKeyPress}
          type='text'
          placeholder='type your task here'
          elemStyle={isValueValid ? 'todo' : 'todo-error'}
        />
        <Button onClick={onAddItem} elemStyle='todo' name='+' />
        <Button onClick={onSettingsPushed} elemStyle='todo' name='V' />
      </div>
      <div className='todo-body'>
        {tasks.length > 0 ? spawnTasks() :
          <div className='emty-message'>
            <span>You haven't any tasks yet!</span>
          </div>}
      </div>
      {setingsToggle &&
        <ToDoSettings
          bGColor={bGColor} textColor={textColor}
          settings={settings} onSetSettings={onSetSettings}
        />}
    </div>
  )
}
