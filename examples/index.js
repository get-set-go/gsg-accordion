import './index.less';

import React from 'react';
import ReactDOM from 'react-dom';

import { Accordion, AccordionSession } from '../dist/index.min';

class Page extends React.Component {
  render() {
    return (
      <div className="accordion-eg-container">
        <h1>Get-Set-Go Accordion Component</h1>

        <p className="accordion-eg-group">
          <h4>Accordion Styles</h4>

          <Accordion>
            <AccordionSession title="JavaScript">
              A high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification.
            </AccordionSession>
            <AccordionSession title="Python">
              A widely used high-level, general-purpose, interpreted, dynamic programming language.
            </AccordionSession>
            <AccordionSession title="Golang">
              Go (often referred to as golang) is a free and open source programming language created at Google in 2007 by Robert Griesemer, Rob Pike, and Ken Thompson.
            </AccordionSession>
          </Accordion>

          <Accordion bStyle="primary">
            <AccordionSession title="JavaScript">
              A high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification.
            </AccordionSession>
            <AccordionSession title="Python">
              A widely used high-level, general-purpose, interpreted, dynamic programming language.
            </AccordionSession>
            <AccordionSession title="Golang">
              Go (often referred to as golang) is a free and open source programming language created at Google in 2007 by Robert Griesemer, Rob Pike, and Ken Thompson.
            </AccordionSession>
          </Accordion>

          <Accordion bStyle="success">
            <AccordionSession title="JavaScript">
              A high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification.
            </AccordionSession>
            <AccordionSession title="Python">
              A widely used high-level, general-purpose, interpreted, dynamic programming language.
            </AccordionSession>
            <AccordionSession title="Golang">
              Go (often referred to as golang) is a free and open source programming language created at Google in 2007 by Robert Griesemer, Rob Pike, and Ken Thompson.
            </AccordionSession>
          </Accordion>

          <Accordion bStyle="info">
            <AccordionSession title="JavaScript">
              A high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification.
            </AccordionSession>
            <AccordionSession title="Python">
              A widely used high-level, general-purpose, interpreted, dynamic programming language.
            </AccordionSession>
            <AccordionSession title="Golang">
              Go (often referred to as golang) is a free and open source programming language created at Google in 2007 by Robert Griesemer, Rob Pike, and Ken Thompson.
            </AccordionSession>
          </Accordion>

          <Accordion bStyle="warning">
            <AccordionSession title="JavaScript">
              A high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification.
            </AccordionSession>
            <AccordionSession title="Python">
              A widely used high-level, general-purpose, interpreted, dynamic programming language.
            </AccordionSession>
            <AccordionSession title="Golang">
              Go (often referred to as golang) is a free and open source programming language created at Google in 2007 by Robert Griesemer, Rob Pike, and Ken Thompson.
            </AccordionSession>
          </Accordion>

          <Accordion bStyle="danger">
            <AccordionSession title="JavaScript">
              A high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification.
            </AccordionSession>
            <AccordionSession title="Python">
              A widely used high-level, general-purpose, interpreted, dynamic programming language.
            </AccordionSession>
            <AccordionSession title="Golang">
              Go (often referred to as golang) is a free and open source programming language created at Google in 2007 by Robert Griesemer, Rob Pike, and Ken Thompson.
            </AccordionSession>
          </Accordion>
        </p>
      </div>
    );
  }
};

ReactDOM.render(
  <Page />,
  document.getElementById('container')
);
