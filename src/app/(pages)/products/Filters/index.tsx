"use client" //aun si no usamos algo cómo un useState igual ponerlo

import React from 'react'

import classes from './index.module.scss'
import { useFilter } from '../../../_providers/Filter';
import { Category } from '../../../../payload/payload-types';
import { Checkbox } from '../../../_components/Checkbox';
import { HR } from '../../../_components/HR';
import { RadioButton } from '../../../_components/Radio';

export const Filters = ({categories}: { categories: Category[]}) => {
  const { categoryFilters, sort, setCategoryFilters, setSort } = useFilter();

  const handleCategories = (categoryId: string) => {
    if(categoryFilters.includes(categoryId)) {
      const updatedCategories = categoryFilters.filter(id => id !==categoryId)

      setCategoryFilters(updatedCategories)
    } else { //si queremos agregar un filtro funciona con este else
      setCategoryFilters([...categoryFilters, categoryId])
    }
  }

  const handleSort = (value: string) => setSort(value)

  return (
    <div className={classes.filters}>
      <div>
        <h6 className={classes.title}>Products Categories </h6>
        <div className={classes.categories}>
          {categories.map((category) => {
            const isSelected = categoryFilters.includes(category.id)

            return (
              <Checkbox
                key={category.id}
                label={category.title}
                value={category.id}
                isSelected={isSelected}
                onClickHandler={handleCategories}
              />
            )
          })}
        </div>
        <HR className={classes.hr} />
        <h6 className={classes.title}> SortBy</h6>
        <div className={classes.categories}>
          <RadioButton
            label='Latest'
            value='-createdAt'
            isSelected={sort == '-createdAt'}
            onRadioChange={handleSort}
            groupName="Sort"
          
          />
          <RadioButton
            label='Oldest'
            value='createdAt'
            isSelected={sort == 'createdAt'}
            onRadioChange={handleSort}
            groupName="Sort"
          
          />
        </div>
      </div>
    </div>
  )
}
