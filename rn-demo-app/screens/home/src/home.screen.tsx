import React                    from 'react'
import { Fragment }             from 'react'

import { RecommendationsBlock } from '@fragments/recommendations-block'
import { ScreenLayout }         from '@fragments/screen-layout'
import { Condition }            from '@ui/condition'
import { Spacer }               from '@ui/spacer'

import { RECOMMENDER_CODES }    from './home.constants'
import { HomeProps }            from './home.interfaces'

const HomeScreen = ({ navigation }: HomeProps) => (
  <ScreenLayout navigation={navigation}>
    <Spacer height={16} />
    {RECOMMENDER_CODES.map((code, index) => (
      <Fragment key={code}>
        <Condition condition={!!index}>
          <Spacer height={16} />
        </Condition>
        <RecommendationsBlock recommenderCode={code} navigation={navigation} />
      </Fragment>
    ))}
    <Spacer height={16} />
  </ScreenLayout>
)

export default HomeScreen
