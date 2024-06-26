import React                  from 'react'
import Icon                   from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity }   from 'react-native'
import { useCallback }        from 'react'
import { useTranslation }     from 'react-i18next'

import { APP_ROUTES }         from '@navigations/constants'
import { Condition }          from '@ui/condition'
import { Row }                from '@ui/layout'
import { TextComponent }      from '@ui/text'

import { ShowComponentProps } from './show.interfaces'

export const ShowMore = ({ navigation, recommenderCode, infiniteScroll }: ShowComponentProps) => {
  const { t } = useTranslation()

  const handlePress = useCallback(() => {
    navigation.push(APP_ROUTES.RECOMMENDATION_PRODUCTS.name, { recommenderCode })
  }, [navigation, recommenderCode])

  return (
    <Condition condition={infiniteScroll}>
      <TouchableOpacity onPress={handlePress}>
        <Row alignItems='flex-end'>
          <TextComponent fontSize='semi' fontWeight='medium' lineHeight={1} fontColor='gray'>
            {t('fragments.recommendations-block.show')}
          </TextComponent>
          <Icon name='chevron-forward' size={14} />
        </Row>
      </TouchableOpacity>
    </Condition>
  )
}
