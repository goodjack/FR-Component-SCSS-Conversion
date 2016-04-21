import React from 'react';
import CodeExample from '../../../CodeExample';
import PropTypeDescription from '../../../PropTypeDescription';
import MarkdownElement from '../../../MarkdownElement';

import sectionTitleReadmeText from './README';
import sectionTitleCode from '!raw!uniqlo-ui/lib/section-title';
import SectionTitleExampleSimple from './ExampleSimple';
import sectionTitleExampleSimpleCode from '!raw!./ExampleSimple';

const SectionTitlePage = () => (
  <div>
    <MarkdownElement text={sectionTitleReadmeText} />
    <CodeExample code={sectionTitleExampleSimpleCode}>
      <SectionTitleExampleSimple />
    </CodeExample>
    <PropTypeDescription code={sectionTitleCode}/>
  </div>
);

export default SectionTitlePage;
