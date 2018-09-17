import React, {Fragment} from 'react'
import {Icon, Message} from 'semantic-ui-react'
import CONTRIBUTORS, {ROLES} from 'data/CONTRIBUTORS'
import CoreAbout from 'parser/core/modules/About'
import ACTIONS from 'data/ACTIONS'
import {ActionLink} from 'components/ui/DbLink'

export default class About extends CoreAbout {
	description = <Fragment>
		<p>This analyzer aims to give you the information you need to turn your <span className="text-success">parses</span> into <span className="text-orange">parses</span></p>
		<p>If you would like to learn more about RDM, check the guides over at <a href="https://thebalanceffxiv.com/">The Balance</a>, and have a chat in the <code>#rdm_questions</code> channel.</p>
		<Message warning icon>
			<Icon name="warning sign"/>
			<Message.Content>
				Openers, advanced <ActionLink {...ACTIONS.CORPS_A_CORPS}/>, <ActionLink {...ACTIONS.DISPLACEMENT}/>, and <ActionLink {...ACTIONS.MANAFICATION}/> rules are currently not supported at this time.
			</Message.Content>
		</Message>
	</Fragment>
	supportedPatches = {
		from: '4.0',
		to: '4.36',
	}
	contributors = [
		{user: CONTRIBUTORS.LEYLIA, role: ROLES.MAINTAINER},
		{user: CONTRIBUTORS.JUMP, role: ROLES.THEORYCRAFT},
	]
}
