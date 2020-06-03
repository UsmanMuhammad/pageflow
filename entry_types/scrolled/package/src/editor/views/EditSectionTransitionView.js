import {EditConfigurationView} from 'pageflow/editor';
import {SelectInputView, ThumbnailInputView} from 'pageflow/ui';
import {getTransitionNames, getAvailableTransitionNames} from 'pageflow-scrolled/frontend';

export const EditSectionTransitionView = EditConfigurationView.extend({
  translationKeyPrefix: 'pageflow_scrolled.editor.edit_section_transition',

  configure: function(configurationEditor) {
    const entry = this.options.entry;
    const sectionIndex = entry.sections.indexOf(this.model);
    const previousSection = entry.sections.at(sectionIndex - 1);

    const availableTransitions = getAvailableTransitionNames(
      this.model.configuration.attributes,
      previousSection.configuration.attributes
    );

    configurationEditor.tab('transition', function() {
      this.input('transition', ThumbnailInputView, {
        values: getTransitionNames(),
        optionDisabled: (value) => !availableTransitions.includes(value)
      });
    });
  }
});
