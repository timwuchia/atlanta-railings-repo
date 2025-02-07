import { registerBlockType } from '@wordpress/blocks';
import { useState } from '@wordpress/element';
import { RichText } from '@wordpress/block-editor';

registerBlockType('theme-blocks/accordion', {
    title: 'Accordion',
    icon: 'list-view',
    category: 'widgets',
    attributes: {
        title: { type: 'string', default: 'Accordion Title' },
        content: { type: 'string', default: 'Accordion content goes here...' }
    },
    edit: ({ attributes, setAttributes }) => {
        const { title, content } = attributes;
        return (
            <div className="wp-block-mytheme-accordion">
                <RichText
                    tagName="h3"
                    value={title}
                    onChange={(val) => setAttributes({ title: val })}
                    placeholder="Enter title..."
                />
                <RichText
                    tagName="p"
                    value={content}
                    onChange={(val) => setAttributes({ content: val })}
                    placeholder="Enter content..."
                />
            </div>
        );
    },
    save: ({ attributes }) => {
        const { title, content } = attributes;
        return (
            <div className="wp-block-mytheme-accordion">
                <h3 className="accordion-title">{title}</h3>
                <div className="accordion-content">{content}</div>
            </div>
        );
    }
});
